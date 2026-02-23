import type { INodeProperties } from 'n8n-workflow';

export const metaDescription: INodeProperties[] = [
    {
        displayName: 'Operation',
        name: 'operation',
        type: 'options',
        noDataExpression: true,
        displayOptions: {
            show: {
                resource: ['meta'],
            },
        },
        options: [
            {
                name: 'Get Countries',
                value: 'getCountries',
                action: 'Get all countries',
                routing: {
                    request: { method: 'GET', url: '/countries' },
                },
            },
            {
                name: 'Get Currencies',
                value: 'getCurrencies',
                action: 'Get all currencies',
                routing: {
                    request: { method: 'GET', url: '/currencies' },
                },
            },
            {
                name: 'Get Document Types',
                value: 'getDocumentTypes',
                action: 'Get all document types',
                routing: {
                    request: { method: 'GET', url: '/documentTypes' },
                },
            },
            {
                name: 'Get Payment Methods',
                value: 'getPaymentMethods',
                action: 'Get all payment methods',
                routing: {
                    request: { method: 'GET', url: '/paymentMethods' },
                },
            },
            {
                name: 'Get Tax Rates (VAT)',
                value: 'getTaxRates',
                action: 'Get all tax rates',
                routing: {
                    request: { method: 'GET', url: '/taxRates' },
                },
            },
        ],
        default: 'getCountries',
    },
];