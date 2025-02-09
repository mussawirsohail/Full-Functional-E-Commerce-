export default {
    name: 'order',
    type: 'document',
    title: 'Order',
    fields: [
        {
            name: 'FullName',
            title: 'Full Name',
            type: 'string'
        },
        {
            name: 'Address',
            title: 'Address',
            type: 'string'
        },
        {
            name: 'phoneNo',
            title: 'Phone Number',
            type: 'number'
        },
        {
            name: 'City',
            title: 'City',
            type: 'string'
        },
        {
            name: 'Country',
            title: 'Country',
            type: 'string'
        },
        {
            name: 'PostalCode',
            title: 'Postal Code',
            type: 'number'
        },
        {
            name: 'CartItems',
            title: 'Cart Items',
            type: 'array',
            of: [{ type: 'reference', to: [{ type: 'product' }] }]
        },
        {
            name: 'Total',
            title: 'Total',
            type: 'number'
        },
        {
            name: 'status',
            title: 'Order Status',
            type: 'string',
            options: {
                list: [
                    { title: 'Pending', value: 'pending' },
                    { title: 'Success', value: 'success' },
                    { title: 'Dispatch', value: 'dispatch' }
                ]
            }
        }
    ]
}