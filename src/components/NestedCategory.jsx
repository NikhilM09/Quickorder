import Category from "./Category"

const NestedCategory = ({mainCategory, categoryCollection}) =>{
    return(
        <div>
            <h1 className="text-3xl font-bold">{mainCategory}</h1>
            {
                categoryCollection.map((category)=>{
                    return (
                        <Category
                            title={category?.title}
                            collection={category?.itemCards}
                        />
                    )
                })
            }
        </div>
    )
}

export default NestedCategory