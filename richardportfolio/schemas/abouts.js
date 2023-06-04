export default{
    name:'abouts',
    title:'Abouts',
    type: 'document',
    fields:[
        {
            name:'title',
            title:'Title',
            type:'string'
        },
        {
            name:'link',
            title:'link',
            type:'string'
        },
        {
            name:'imgUrl',
            title:'ImgUrl',
            type: 'image',
            options: {
              hotspot: true,
            },
            store: {
                originalFilename: true
              }
        },
        
    ]
}