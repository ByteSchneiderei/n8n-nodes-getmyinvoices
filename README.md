# n8n-nodes-getmyinvoices

This is an n8n community node. It lets you use the GetMyInvoices v3 API in your n8n workflows.

[GetMyInvoices](https://www.getmyinvoices.com/) is a digital invoice management software that automatically fetches invoices and receipts from thousands of online portals, email accounts, and other sources. This node allows you to automate fetching, creating, and managing documents, companies, and attachments directly within n8n.

[n8n](https://n8n.io/) is a [fair-code licensed](https://docs.n8n.io/reference/license/) workflow automation platform.

## Table of Contents
* [Installation](#installation)
* [Operations](#operations)
* [Credentials](#credentials)
* [Compatibility](#compatibility)
* [Resources](#resources)

## Installation

Follow the [installation guide](https://docs.n8n.io/integrations/community-nodes/installation/) in the n8n community nodes documentation.

To install this node via the n8n UI:
1. Go to **Settings > Community Nodes**.
2. Click **Install**.
3. Enter `n8n-nodes-getmyinvoices`.
4. Click **Install** and then restart n8n if prompted.

## Operations

Currently, this node supports the following resources and operations from the GetMyInvoices v3 API:

* **Document**
    * Get a document
    * Get many documents (with filtering and pagination)
    * Create a document (upload via Base64)
* **Company**
    * Get a company
    * Get many companies
* **Attachment**
    * Get an attachment
    * Get many attachments
* **Bank Account**
    * Get many bank accounts

*Note: As this node uses n8n's declarative routing style, extending it to support additional v3 endpoints (like Tags, Workflows, or Portals) is straightforward and warmly welcomed via pull requests.*

## Credentials

To use this node, you need an API key from your GetMyInvoices account.

1. Log in to your [GetMyInvoices](https://app.getmyinvoices.com/) account.
2. Navigate to your **Profile / User Settings**.
3. Go to the **API Access** section.
4. Generate a new API Key (Personal Access Token).
5. Copy the generated Key.
6. In n8n, create a new **GetMyInvoices API** credential and paste the key.

## Compatibility

* Requires **n8n version 1.0.0** or newer (built on the `n8nNodesApiVersion: 1` standard).
* Tested against the GetMyInvoices v3 REST API.

## Resources

* [n8n community nodes documentation](https://docs.n8n.io/integrations/#community-nodes)
* [GetMyInvoices v3 API Documentation](https://api.getmyinvoices.com/accounts/v3/doc/index.html)
* [ByteSchneiderei GmbH](https://byteschneiderei.com/) (Author)