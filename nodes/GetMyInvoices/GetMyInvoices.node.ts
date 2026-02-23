import {
    NodeConnectionTypes,
    type INodeType,
    type INodeTypeDescription,
} from 'n8n-workflow';


import { documentDescription } from './resources/document';
import { companyDescription } from './resources/company';
import { bankAccountDescription } from './resources/bankAccount';
import { attachmentDescription } from './resources/attachment';
import { bankTransactionDescription } from './resources/bankTransaction';
import { syncAccountDescription } from './resources/syncAccount';
import { metaDescription } from './resources/meta';

export class GetMyInvoices implements INodeType {
    description: INodeTypeDescription = {
        displayName: 'GetMyInvoices',
        name: 'getMyInvoices',
        icon: 'file:../../icons/getmyinvoices_logo.svg',
        group: ['transform'],
        version: 1,
        subtitle: '={{$parameter["operation"] + ": " + $parameter["resource"]}}',
        description: 'Consume the GetMyInvoices v3 API',
        defaults: {
            name: 'GetMyInvoices',
        },
        usableAsTool: true,
        inputs: [NodeConnectionTypes.Main],
        outputs: [NodeConnectionTypes.Main],
        credentials: [
            {
                name: 'getMyInvoicesApi',
                required: true,
            },
        ],
        requestDefaults: {
            baseURL: 'https://api.getmyinvoices.com/accounts/v3',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
        },
        properties: [
            {
                displayName: 'Resource',
                name: 'resource',
                type: 'options',
                noDataExpression: true,
                options: [
                    { name: 'Attachment', value: 'attachment' },
                    { name: 'Bank Account', value: 'bankAccount' },
                    { name: 'Bank Transaction', value: 'bankTransaction' },
                    { name: 'Company', value: 'company' },
                    { name: 'Document', value: 'document' },
                    { name: 'Meta (Countries, VAT, etc.)', value: 'meta' },
                    { name: 'Sync Account', value: 'syncAccount' },
                ],
                default: 'document',
            },
            ...attachmentDescription,
            ...bankAccountDescription,
            ...bankTransactionDescription,
            ...companyDescription,
            ...documentDescription,
            ...metaDescription,
            ...syncAccountDescription
        ],
    };
}