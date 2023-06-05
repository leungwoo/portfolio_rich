export default {
    name:'workExperience',
    title:'Work Experience',
    type:'document',
    fields:[
           {name:'name',
               title:'name',
               type:'string'
            },
            {
                name:'company',
                title:'Company',
                type:'string'
            },
            {
                name:'desc',
                title:'Desc',
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
            }
    ]
    
}