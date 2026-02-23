import type { INodeProperties } from 'n8n-workflow';

export const companyDescription: INodeProperties[] = [
    {
        displayName: 'Operation',
        name: 'operation',
        type: 'options',
        noDataExpression: true,
        displayOptions: {
            show: {
                resource: ['company'],
            },
        },
        options: [
            {
                name: 'Get Many',
                value: 'getAll',
                action: 'Get many companies',
                routing: {
                    request: { method: 'GET', url: '/companies' },
                },
            },
            {
                name: 'Get One Company',
                value: 'get',
                action: 'Get one company',
                routing: {
                    request: { method: 'GET', url: '=/companies/{{$parameter.companyUid}}' },
                },
            },
        ],
        default: 'getAll',
    },
    {
        displayName: 'Company UID',
        name: 'companyUid',
        type: 'string',
        required: true,
        displayOptions: {
            show: {
                resource: ['company'],
                operation: ['get'],
            },
        },
        default: '',
        description: 'The unique identifier of the company',
    },
    {
        displayName: 'Filters',
        name: 'filters',
        type: 'collection',
        placeholder: 'Add Filter',
        default: {},
        displayOptions: {
            show: {
                resource: ['company'],
                operation: ['getAll'],
            },
        },
        options: [
            {
                displayName: 'Company Type Filter',
                name: 'companyTypeFilter',
                type: 'options',
                options: [
                    { name: 'Any', value: '0' },
                    { name: 'Custom Company Only', value: 'CUSTOM_COMPANY' },
                    { name: 'Online Portal Only', value: 'ONLINE_PORTAL' },
                ],
                default: '0',
                routing: { send: { type: 'query', property: 'companyTypeFilter' } },
            },
            {
                displayName: 'Return Portal Records',
                name: 'returnPortalRecords',
                type: 'options',
                options: [
                    { name: 'Not Show Portal Records', value: 0 },
                    { name: 'Show Portal Records', value: 1 },
                ],
                default: 0,
                routing: { send: { type: 'query', property: 'returnPortalRecords' } },
            },
            {
                displayName: 'Status Filter',
                name: 'statusFilter',
                type: 'options',
                options: [
                    { name: 'Active', value: 1 },
                    { name: 'Any', value: 0 },
                    { name: 'Inactive', value: -1 },
                    { name: 'Pending', value: -2 },
                ],
                default: 0,
                routing: { send: { type: 'query', property: 'statusFilter' } },
            },
        ],
    },
];