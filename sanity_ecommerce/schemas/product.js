export default {
    name: "product",
    title: "Product",
    type: 'document',
    fields: [
        {
            name: 'image',
            title: 'Image',
            type: 'array',
            of: [{type: 'image'}],
            options: {
                hotspot: true, // Hotspot makes it possible to responsively adapt images to different aspect ratios at display time. The default value for hotspot is false.
            }
        },
        {
            name: 'name',
            title: 'Name',
            type: 'string'
        },
        {
            name: 'slug',
            title: 'Slug',
            type: 'slug',
            options: {
                source: 'name',
                maxlength: 90,
            }
        },
        {
            name: 'price',
            title:'Price',
            type: 'number'
        },
        {
            name: 'details',
            title: 'Details',
            type: 'string',
        }
    ]
}