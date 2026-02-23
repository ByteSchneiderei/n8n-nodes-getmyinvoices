# @byteschneiderei/n8n-nodes-getmyinvoices

---

This is an n8n community node. It lets you use the GetMyInvoices v3 API in your n8n workflows.

[GetMyInvoices](https://www.getmyinvoices.com/) is a digital invoice management software that automatically fetches invoices and receipts from thousands of online portals, email accounts, and other sources. This node allows you to automate fetching and managing documents, companies, and bank transactions directly within n8n.

[n8n](https://n8n.io/) is a [fair-code licensed](https://docs.n8n.io/reference/license/) workflow automation platform.

---

[Installation](#installation) | [Operations](#operations) | [Credentials](#credentials) | [Compatibility](#compatibility) | [Usage](#usage) | [Resources](#resources) | [Version history](#version-history)

---

## Installation

Follow the [installation guide](https://docs.n8n.io/integrations/community-nodes/installation/) in the n8n community nodes documentation.

To install this node via the n8n UI:
1. Go to **Settings > Community Nodes**.
2. Click **Install**.
3. Enter `@byteschneiderei/n8n-nodes-getmyinvoices`.
4. Click **Install** and then restart n8n if prompted.

## Operations

This node focuses on the **Read-Only** capabilities of the GetMyInvoices v3 API to enable seamless data synchronization and automation.

| Resource         | Get One | Get Many | Additional Operations |
|------------------|:---:|:---:|---------------------------------------------------|
| **Document** |  ✓  |    ✓   | Download File, Get Deleted, Attachments (Get/Many)|
| **Company** |  ✓  |    ✓   | Filter by type and status                         |
| **Bank Account** |     |    ✓   | Get Transactions, Get Assigned Documents           |
| **Bank Transaction** | |    ✓   | Cross-account transaction listing                 |
| **Sync Account** |     |    ✓   | List synchronization targets                      |
| **Meta** |  ✓  |    ✓   | Countries, Currencies, Portals, Tags, Users, VAT  |

## Credentials

To use this node, you need an API key from your GetMyInvoices account.

1. Log in to your [GetMyInvoices](https://app.getmyinvoices.com/) account.
2. Navigate to your **Profile / User Settings**.
3. Go to the **API Access** section.
4. Generate a new **API Key** (Personal Access Token).
5. In n8n, create a new **GetMyInvoices API** credential and paste the key.

## Compatibility

* **n8n version**: Tested with n8n version 1.0.0 and newer.
* **API version**: Built against the GetMyInvoices v3 REST API.

## Usage

Here are a few examples of what you can do with this node:

* **Automated Sync**: Fetch new invoices since the last execution (`updatedOrNewSinceFilter`) and upload them to your accounting software.
* **Banking Reconciliation**: List bank transactions and automatically download the assigned invoice documents.
* **Inventory & Audit**: Periodically list all companies and verify their master data against your internal database.

For general n8n usage, see the [Try it out guide](https://docs.n8n.io/try-it-out/).

## Resources

* [n8n community nodes documentation](https://docs.n8n.io/integrations/#community-nodes)
* [GetMyInvoices v3 API Documentation](https://api.getmyinvoices.com/accounts/v3/doc/index.html)
* [ByteSchneiderei GmbH](https://byteschneiderei.com/) (Author)

## Version history

| Version   | Description |
|-----------| ----------- |
| **0.2.0** | Initial release with full Read-Only support for Documents, Companies, Bank Accounts, Sync Accounts and Meta data. |