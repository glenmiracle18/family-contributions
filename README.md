# 👨‍👩‍👦 📲 Family Contributions [FamCon]
A Go package that reads group contribution membership data from a Google Sheet and sends SMS reminders to members about their upcoming monthly contributions and produces an individualized monthly statement of contributions.

Suitable if you have a family, co-worker group that wants to be contributing monthly for a common a goal, but would like to automate the communication part!

## Features

- Reads membership data from a Google Sheet
- Validates the structure of the Google Sheet
- Sends plain text SMS reminders using a customizable template

## Prerequisites

To use this package, you need to have:

- Go 1.11 or later installed on your system
- A Google Cloud Platform (GCP) project with the [Google Sheets API](https://developers.google.com/sheets/api/guides/concepts) enabled
- OAuth2 credentials for the Google Sheets API (in the form of a [`credentials.json`](https://console.cloud.google.com/apis/credentials) file). Make sure to keep this in the root of your poject.
- Credentials from Twilio for Sending SMSs (typically obtained after [signup](https://www.twilio.com/try-twilio) for an account), including `Account SID`, `Auth Token`, and a `Twilio phone number`, stored in a `twilio.json` file at the root of the project, as follows:

```json
{
    "accountSid": "REPLACE_ME",
    "authToken": "REPLACE_ME",
    "phoneNumber": "REPLACE_ME"
}
```

## Installation

To install the package, run the following command in your Go project:

```bash
go get github.com/liwoo/family-contributions
```

## Usage

First, import the package in your Go code:

```go
import fc "github.com/liwoo/family-contributions/reminder"
```

Next, create a new `FamCon` instance by providing the required configuration:

```go
famCon := fc.FamCon(
	spreadsheetId,
	smsTemplate,
)
```

Then, call the Remind function to read the data from the Google Sheet and send SMS reminders:

```go
err := famCon.Remind()
if err != nil {
	log.Fatalf("Failed to fire reminders: %v", err)
}
```

If successful, each one of your group members should receive an SMS reminder for their due contribtions for the latest month on record, if not already contributed.

For a complete example, refer to the sample application (not included in the package).

## Google Sheets Structure

### The Google Sheet should have the following columns:

```csv
Name, Phone Number, Monthly Commitment, Jan 2023, Feb 2023, March 2023
```
* Name: Member's name
* Phone Number: Member's phone number
* Monthly Commitment: Member's monthly contribution amount
* Jan 2023, Feb 2023, March 2023, ...: Columns for each month, indicating all their monthly contribtions to date.  Typically you would like to keep the upcoming month blank for all members, so that the Reminder sends an SMS to everyone.  Otherwise SMSs will be sent only to non-paid members of the latest month (the last column) on record.

## Customizing the SMS Template
To customize the plain text SMS template, provide a custom template string when creating a new Reminder instance. The template should contain placeholders for the name, commitment, and next month values, enclosed in double curly braces (e.g., {{.Name}}, {{.Commitment}}, {{.NextMonth}}).
Here's an example of a custom email template:

```go
Dear {{.Name}}. This is a reminder of your monthly contribution of MWK {{.Commitment}} for the month of {{.NextMonth}}.
```

## Upcoming Features

- [ ] Abulity to send an individualized monthly PDF summary of member contributions
- [ ] Ability to send a Thank you SMS whenever a new contribution has been recorded in the spreadsheet

## License
This project is licensed under the MIT License.

