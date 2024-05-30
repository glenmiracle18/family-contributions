import { ReactNode, useState } from "react";
import { HiEye, HiSearch } from "react-icons/hi";
import {
  Button,
  TextInput,
  Table,
  Checkbox,
  Pagination,
  Modal,
  Tooltip,
} from "flowbite-react";
import GridStats, { GridStatsProps } from "~/components/widgets/grid/GridStats";
import {
  useLocation,
  useNavigate,
  useParams,
  useSearchParams,
} from "@remix-run/react";
import { BiCaretDown, BiCloudLightning, BiFilterAlt } from "react-icons/bi";
import { camelCaseToWhiteSpaces } from "~/utils/helpers/helpers";
import { Identifiable } from "~/utils/types";
import { HiTrash } from "react-icons/hi2";

interface GridProps<TType> {
  title?: string;
  cells: (item: TType) => ReactNode[];
  getEditLink?: (item: TType) => string;
  getPreviewLink: (item: TType) => string;
  customFilters?: ReactNode;
  bulkActions?: ReactNode;
  basePage: string;
  onBulkActions?: (ids: string[]) => ReactNode;
  onBulkDelete: (ids: string[]) => void;
  rowsPerPage?: number;
  currentPage?: number;
  totalItems: number;
  data: TType[];
}

export default function Grid<TType>(props: Readonly<GridProps<TType>>) {
  const [openModal, setOpenModal] = useState(false);
  const [isDeleting, setIsDeleting] = useState(false);
  const [selectedItems, setSelectedItems] = useState<string[]>([]);
  const navigator = useNavigate();
  const [params, _] = useSearchParams();
  const currentPage = params.get("page") ? parseInt(params.get("page")!) : 1;

  if (props.data.length <= 0) {
    return (
      <div className="flex h-96 items-center justify-center">
        <p className="text-gray-500 dark:text-gray-400">No items found</p>
      </div>
    );
  }

  // setting the collumns by id
  const columns = Object.keys(props.data[0] as object).filter(
    (col) => col != "id",
  );

  //check if base page is set
  if (!props.basePage) {
    throw new Error("Base page is required");
  }

  //check that every column has a cell
  const cells = props.data.map(props.cells);
  if (columns.length !== cells[0].length) {
    throw new Error(
      `Columns (with length ${columns.length}) and Cells (with length ${props.cells.length}) must have the same length`,
    );
  }

  //fetch from settings
  const rowsPerPage = props.rowsPerPage || 10;
  if (props.data.length > rowsPerPage) {
    throw new Error(
      `Page items (with length ${props.data.length}) must have the same length as rows per page (${rowsPerPage})`,
    );
  }

  const title = props.title ?? "Items";

  const stats: GridStatsProps = {
    name: title,
    results: props.data.length,
    currentPage: currentPage,
    totalPages: Math.ceil(props.totalItems / rowsPerPage),
    total: props.totalItems,
  };

  const changePage = async (page: number) => {
    navigator(`${props.basePage}?page=${page}&perPage=${rowsPerPage}`);
  };

  const selectAll = (e: React.ChangeEvent<HTMLInputElement>) => {
    //toggle all checkboxes with class .row-checkbox
    const checkboxes = document.querySelectorAll(".row-checkbox");
    checkboxes.forEach((checkbox) => {
      (checkbox as HTMLInputElement).checked = e.target.checked;
    });
    const checkedIds = Array.from(checkboxes)
      .filter((checkbox) => (checkbox as HTMLInputElement).checked)
      .map((checkbox) => (checkbox as HTMLInputElement).value);

    setSelectedItems(checkedIds);
  };

  const toggleItem = (e: React.ChangeEvent<HTMLInputElement>) => {
    const id = e.target.value;
    if (e.target.checked) {
      setSelectedItems([...selectedItems, id]);
    } else {
      setSelectedItems(selectedItems.filter((itemId) => itemId !== id));
    }
  };

  const removeItems = () => {
    props.onBulkDelete(selectedItems);
    setOpenModal(false);
    setIsDeleting(true);
  };

  return (
    <>
      <Modal show={openModal} onClose={() => setOpenModal(false)}>
        <Modal.Header>Delete {selectedItems.length} items?</Modal.Header>
        <Modal.Body>
          <div className="space-y-6">
            <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
              By removing the selected contributor, you will lose all the data
              associated with them. This action cannot be undone!
            </p>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button color="failure" onClick={removeItems}>
            Delete
          </Button>
          <Button color="gray" onClick={() => setOpenModal(false)}>
            Or Cancel
          </Button>
        </Modal.Footer>
      </Modal>
      <div className="relative overflow-hidden bg-white shadow-md dark:bg-gray-800 sm:rounded-lg">
        <div className="mx-4 flex flex-col items-stretch justify-between space-y-3 py-4 md:flex-row md:items-center md:space-x-3 md:space-y-0">
          <div>
            <Button
              onClick={() => setOpenModal(true)}
              color={`${
                selectedItems.length === 0 || isDeleting ? "light" : "failure"
              }`}
              disabled={selectedItems.length === 0 || isDeleting}
            >
              <HiTrash className="h-4 w-4" />
            </Button>
          </div>
          <div className="hidden w-full lg:block">
            <GridStats {...stats} />
          </div>
          <div className="w-full">
            <form className="flex items-center">
              <TextInput
                disabled={isDeleting}
                id="search"
                type="text"
                icon={HiSearch}
                className="w-full"
                placeholder="Search for items"
              />
            </form>
          </div>
          <div className="flex w-full flex-shrink-0 flex-col items-stretch justify-end space-y-2 md:w-auto md:flex-row md:items-center md:space-x-3 md:space-y-0">
            {props.customFilters && (
              <Tooltip
                aria-labelledby="default-popover"
                style="light"
                content={
                  <div className="-m-3 flex justify-center">
                    {props.customFilters}
                  </div>
                }
                trigger="click"
                arrow={false}
              >
                <Button color="light" size="sm" disabled={isDeleting}>
                  <BiFilterAlt className="mr-2 h-4 w-4" />
                  Filter options
                  <BiCaretDown className="ml-2 h-4 w-4" />
                </Button>
              </Tooltip>
            )}

            {props.onBulkActions && (
              <Tooltip
                aria-labelledby="default-popover"
                style="light"
                content={
                  <div className="-m-3 flex justify-center">
                    {props.onBulkActions(
                      selectedItems.map((id) => id.toString()) as string[],
                    )}
                  </div>
                }
                trigger="click"
                arrow={false}
              >
                <Button color="light" size="sm" disabled={isDeleting}>
                  <BiCloudLightning className="mr-2 h-4 w-4" />
                  Actions
                  <BiCaretDown className="ml-2 h-4 w-4" />
                </Button>
              </Tooltip>
            )}
          </div>
        </div>
        <div className="overflow-x-auto">
          <Table hoverable>
            <Table.Head>
              <Table.HeadCell className="p-4">
                <Checkbox disabled={isDeleting} onChange={selectAll} />
              </Table.HeadCell>
              {columns.map((column) => (
                <Table.HeadCell key={column} className="whitespace-nowrap">
                  {camelCaseToWhiteSpaces(column)}
                </Table.HeadCell>
              ))}
              <Table.HeadCell>
                <span className="sr-only">Actions</span>
              </Table.HeadCell>
            </Table.Head>
            <Table.Body className="divide-y">
              {props.data.map((item, index) => {
                if (
                  isDeleting &&
                  selectedItems.includes((item as Identifiable).id)
                ) {
                  return (
                    <Table.Row
                      className="bg-white dark:border-gray-700 dark:bg-gray-800"
                      key={JSON.stringify(item)}
                    >
                      <Table.Cell className="p-4" colSpan={columns.length + 2}>
                        <div className="flex h-8 animate-pulse items-center justify-center rounded-lg bg-slate-200" />
                      </Table.Cell>
                    </Table.Row>
                  );
                }
                const previewLink = props.getPreviewLink(item);

                return (
                  <Table.Row
                    className="bg-white dark:border-gray-700 dark:bg-gray-800"
                    key={JSON.stringify(item)}
                  >
                    <Table.Cell className="p-4">
                      <Checkbox
                        className="row-checkbox"
                        disabled={isDeleting}
                        onChange={toggleItem}
                        value={(item as Identifiable).id}
                      />
                    </Table.Cell>
                    {Object.keys(cells[index]).map((key, ind) => (
                      <Table.Cell key={key} className="whitespace-nowrap">
                        {cells[index][ind]}
                      </Table.Cell>
                    ))}
                    <Table.Cell>
                      {props.getEditLink !== undefined ? (
                        <Button.Group>
                          <Button
                            disabled={isDeleting}
                            color="light"
                            href={isDeleting ? "#" : props.getEditLink(item)}
                          >
                            Edit
                          </Button>
                          <Button
                            disabled={isDeleting}
                            color="light"
                            href={isDeleting ? "#" : previewLink}
                          >
                            Preview
                          </Button>
                        </Button.Group>
                      ) : (
                        <Button
                          disabled={isDeleting}
                          className="w-8"
                          size="sm"
                          color="light"
                          href={isDeleting ? "#" : previewLink}
                        >
                          <HiEye />
                        </Button>
                      )}
                    </Table.Cell>
                  </Table.Row>
                );
              })}
            </Table.Body>
          </Table>
        </div>

        {stats.totalPages > 1 && (
          <nav
            className="flex flex-col items-start justify-between space-y-3 border border-t p-4 md:flex-row md:items-center md:space-y-0"
            aria-label="Table navigation"
          >
            <Pagination
              currentPage={stats.currentPage}
              totalPages={stats.totalPages}
              onPageChange={isDeleting ? (_page) => null : changePage}
            />
          </nav>
        )}
      </div>
    </>
  );
}
