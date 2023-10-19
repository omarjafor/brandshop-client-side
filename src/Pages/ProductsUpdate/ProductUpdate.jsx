import { useLoaderData } from "react-router-dom";
import toast from "react-hot-toast";
import { Helmet } from "react-helmet-async";


const ProductUpdate = () => {
    const product = useLoaderData();
    const { _id, productName, brandName, type, price, description, rating, photo } = product || {} ;

    const handleUpdateProduct = e => {
        e.preventDefault();
        const productName = e.target.name.value;
        const brandName = e.target.brandname.value;
        const type = e.target.type.value;
        const price = e.target.price.value;
        const description = e.target.description.value;
        const rating = e.target.rating.value;
        const photo = e.target.photo.value;

        const updatedProduct = { productName, brandName, type, price, description, rating, photo }
        console.log(updatedProduct);

        fetch(`https://brandshop-server-side.vercel.app/products/${_id}`, {
            method: 'PUT',
            headers: {
                'content-type' : 'application/json'
            },
            body: JSON.stringify(updatedProduct)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            if (data.modifiedCount > 0){
                toast.success('Product Updated Successful');
            }
        })
    }

    return (
        <div className="p-24">
            <Helmet>
                <title>Bombshell Beauty | Update Product</title>
            </Helmet>
            <h2 className="text-3xl text-center font-extrabold mb-3">Update {brandName} {productName}</h2>
            <p className="text-2xl text-center font-bold mb-10">You Can Update {productName} Details Here</p>
            <form onSubmit={handleUpdateProduct} >
                {/* form name and quantity row */}
                <div className="md:flex mb-8 md:justify-center md:justify-items-center">
                    <div className="form-control md:w-1/3">
                        <label className="label">
                            <span className="font-bold text-lg">Product Name</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="name" placeholder="Product Name" defaultValue={ productName } className="input input-bordered w-full" />
                        </label>
                    </div>
                    <div className="form-control md:w-1/3 ml-4">
                        <label className="label">
                            <span className="font-bold text-lg">Brand Name</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="brandname" placeholder="Brand Name" defaultValue={ brandName } className="input input-bordered w-full" />
                        </label>
                    </div>
                </div>
                {/* form supplier row */}
                <div className="md:flex mb-8 md:justify-center md:justify-items-center">
                    <div className="form-control md:w-1/3">
                        <label className="label">
                            <span className="font-bold text-lg">Product Type</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="type" placeholder="Product Type" defaultValue={ type } className="input input-bordered w-full" />
                        </label>
                    </div>
                    <div className="form-control md:w-1/3 ml-4">
                        <label className="label">
                            <span className="font-bold text-lg">Price</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="price" placeholder="Price" defaultValue={ price } className="input input-bordered w-full" />
                        </label>
                    </div>
                </div>
                {/* form category and details row */}
                <div className="md:flex mb-8 md:justify-center md:justify-items-center">
                    <div className="form-control md:w-1/3">
                        <label className="label">
                            <span className="font-bold text-lg">Short Description</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="description" placeholder="Short Description" defaultValue={ description } className="input input-bordered w-full" />
                        </label>
                    </div>
                    <div className="form-control md:w-1/3 ml-4">
                        <label className="label">
                            <span className="font-bold text-lg">Ratings</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="rating" placeholder="Ratings" defaultValue={ rating } className="input input-bordered w-full" />
                        </label>
                    </div>
                </div>
                {/* form Photo url row */}
                <div className="mb-8 md:flex md:justify-center md:justify-items-center">
                    <div className="form-control md:w-1/3">
                        <label className="label">
                            <span className="font-bold text-lg">Photo URL</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="photo" placeholder="Photo URL" defaultValue={ photo } className="input input-bordered w-full" />
                        </label>
                    </div>
                </div>
                <div className="mx-auto text-center">
                    <input type="submit" value="Update Product" className="btn btn-block bg-blue-500 hover:bg-green-500 text-white hover:text-black md:w-1/4" />
                </div>
            </form>
        </div>
    );
};

export default ProductUpdate;