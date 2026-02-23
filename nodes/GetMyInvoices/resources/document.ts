import type { INodeProperties } from 'n8n-workflow';

export const documentDescription: INodeProperties[] = [
    {
        displayName: 'Operation',
        name: 'operation',
        type: 'options',
        noDataExpression: true,
        displayOptions: {
            show: {
                resource: ['document'],
            },
        },
        options: [
            {
                name: 'Download Document',
                value: 'download',
                action: 'Download document',
                routing: {
                    request: {
                        method: 'GET',
                        url: '=/documents/{{$parameter["documentUid"]}}/file',
                    },
                },
            },
            {
                name: 'Get All Attachments of Invoice',
                value: 'getAttachments',
                action: 'Get all attachments of invoice',
                routing: {
                    request: {
                        method: 'GET',
                        url: '=/documents/{{$parameter["documentUid"]}}/attachments',
                    },
                },
            },
            {
                name: 'Get All Deleted Documents',
                value: 'getDeleted',
                action: 'Get all deleted documents',
                routing: {
                    request: {
                        method: 'GET',
                        url: '/documents/deleted',
                    },
                },
            },
            {
                name: 'Get Many',
                value: 'getAll',
                action: 'Get many documents',
                routing: {
                    request: {
                        method: 'GET',
                        url: '/documents',
                    },
                },
            },
            {
                name: 'Get One Attachment for an Invoice',
                value: 'getAttachment',
                action: 'Get one attachment for an invoice',
                routing: {
                    request: {
                        method: 'GET',
                        url: '=/documents/{{$parameter["documentUid"]}}/attachments/{{$parameter["attachmentUid"]}}',
                    },
                },
            },
            {
                name: 'Get One Document',
                value: 'get',
                action: 'Get one document',
                routing: {
                    request: {
                        method: 'GET',
                        url: '=/documents/{{$parameter["documentUid"]}}',
                    },
                },
            },
        ],
        default: 'getAll',
    },
    {
        displayName: 'Document UID',
        name: 'documentUid',
        type: 'string',
        required: true,
        displayOptions: {
            show: {
                resource: ['document'],
                operation: ['get', 'download', 'getAttachment', 'getAttachments'],
            },
        },
        default: '',
        description: 'The unique identifier of the document',
    },
    {
        displayName: 'Attachment UID',
        name: 'attachmentUid',
        type: 'string',
        required: true,
        displayOptions: {
            show: {
                resource: ['document'],
                operation: ['getAttachment'],
            },
        },
        default: '',
        description: 'The unique identifier of the attachment',
    },
    {
        displayName: 'Filters',
        name: 'filters',
        type: 'collection',
        placeholder: 'Add Filter',
        default: {},
        displayOptions: {
            show: {
                resource: ['document'],
                operation: ['getAll'],
            },
        },
        options: [
            {
                displayName: 'Archived Filter',
                name: 'archivedFilter',
                type: 'options',
                options: [
                    { name: 'Any', value: 1 },
                    { name: 'Only Archived', value: 2 },
                    { name: 'Only Not Archived', value: 0 },
                ],
                default: 0,
                routing: { send: { type: 'query', property: 'archivedFilter' } },
            },
            {
                displayName: 'Company ID',
                name: 'companyFilter',
                type: 'string',
                default: '',
                description: 'Filter by company UID',
                routing: { send: { type: 'query', property: 'companyFilter' } },
            },
            {
                displayName: 'Document Number Filter',
                name: 'documentNumberFilter',
                type: 'string',
                default: '',
                routing: { send: { type: 'query', property: 'documentNumberFilter' } },
            },
            {
                displayName: 'Document Type Filter',
                name: 'documentTypeFilter',
                type: 'options',
                options: [
                    { name: 'Company Registration Document', value: 'COMPANY_REGISTRATION_DOCUMENT' },
                    { name: 'Credit Note', value: 'CREDIT_NOTE' },
                    { name: 'Delivery Note', value: 'DELIVERY_NOTE' },
                    { name: 'Expense Reimbursement', value: 'EXPENSE_REIMBURSEMENT' },
                    { name: 'Incoming Invoice', value: 'INCOMING_INVOICE' },
                    { name: 'Misc', value: 'MISC' },
                    { name: 'Order Confirmation', value: 'ORDER_CONFIRMATION' },
                    { name: 'Payment Receipt', value: 'PAYMENT_RECEIPT' },
                    { name: 'Payroll', value: 'PAYROLL' },
                    { name: 'Receipt', value: 'RECEIPT' },
                    { name: 'Reminder', value: 'REMINDER' },
                    { name: 'Sales Invoice', value: 'SALES_INVOICE' },
                    { name: 'Statement', value: 'STATEMENT' },
                    { name: 'Travel Expenses', value: 'TRAVEL_EXPENSES' },
                ],
                default: 'INCOMING_INVOICE',
                routing: { send: { type: 'query', property: 'documentTypeFilter' } },
            },
            {
                displayName: 'End Date Filter',
                name: 'endDateFilter',
                type: 'dateTime',
                default: '',
                routing: { send: { type: 'query', property: 'endDateFilter' } },
            },
            {
                displayName: 'Include Thumbnail URL',
                name: 'includeThumbnailUrl',
                type: 'boolean',
                default: false,
                routing: { send: { type: 'query', property: 'includeThumbnailUrl' } },
            },
            {
                displayName: 'Note Filter',
                name: 'noteFilter',
                type: 'string',
                default: '',
                routing: { send: { type: 'query', property: 'noteFilter' } },
            },
            {
                displayName: 'Payment Status Filter',
                name: 'paymentStatusFilter',
                type: 'options',
                options: [
                    { name: 'All', value: 'all' },
                    { name: 'Not Paid', value: 'not_paid' },
                    { name: 'Paid', value: 'paid' },
                    { name: 'Unknown', value: 'unknown' },
                ],
                default: 'all',
                routing: { send: { type: 'query', property: 'paymentStatusFilter' } },
            },
            {
                displayName: 'Per Page',
                name: 'perPage',
                type: 'number',
                typeOptions: { minValue: 1, maxValue: 500 },
                default: 100,
                routing: { send: { type: 'query', property: 'perPage' } },
            },
            {
                displayName: 'Search Query',
                name: 'searchQuery',
                type: 'string',
                default: '',
                description: 'Text based search inside document text',
                routing: { send: { type: 'query', property: 'searchQuery' } },
            },
            {
                displayName: 'Start Date Filter',
                name: 'startDateFilter',
                type: 'dateTime',
                default: '',
                routing: { send: { type: 'query', property: 'startDateFilter' } },
            },
            {
                displayName: 'Updated or New Since Filter',
                name: 'updatedOrNewSinceFilter',
                type: 'dateTime',
                default: '',
                description: 'Limit result to documents modified or created after given date',
                routing: { send: { type: 'query', property: 'updatedOrNewSinceFilter' } },
            },
        ],
    },
];