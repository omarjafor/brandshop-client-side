import { Helmet } from "react-helmet-async";
import toast from "react-hot-toast";


const AddProduct = () => {

    const handleAddProduct = e => {
        e.preventDefault();
        const productName = e.target.name.value;
        const brandName = e.target.brandname.value;
        const type = e.target.type.value;
        const price = e.target.price.value;
        const description = e.target.description.value;
        const rating = e.target.rating.value;
        const photo = e.target.photo.value;

        const product = { productName, brandName, type, price, description, rating, photo }
        console.log(product);

        fetch('https://brandshop-server-side.vercel.app/products', {
            method: 'POST',
            headers: {
                'content-type' : 'application/json'
            },
            body: JSON.stringify(product)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data)
            toast.success('Product Added Successful');
            e.target.reset();
        })
    }
    return (
        <div className="p-24">
            <Helmet>
                <title>Bombshell Beauty | Add Product</title>
            </Helmet>
            <h2 className="text-3xl text-center font-extrabold mb-3 drop-shadow-[-1px_3px_1px_rgba(17,131,6,0.6)] bg-gradient-to-br from-green-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">Add New Product</h2>
            <p className="text-2xl text-center font-bold mb-10 drop-shadow-[-1px_3px_1px_rgba(17,131,6,0.6)] bg-gradient-to-br from-green-200 via-blue-500 to-purple-600 bg-clip-text text-transparent">Give Your Entire Product Details Here</p>
            <form onSubmit={handleAddProduct} >
                {/* form name and quantity row */}
                <div className="md:flex mb-8 md:justify-center md:justify-items-center">
                    <div className="form-control md:w-1/3">
                        <label className="label">
                            <span className="font-bold text-lg text-blue-600">Product Name</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="name" placeholder="Product Name" className="input input-bordered w-full" />
                        </label>
                    </div>
                    <div className="form-control md:w-1/3 ml-4">
                        <label className="label">
                            <span className="font-bold text-lg text-blue-600">Brand Name</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="brandname" placeholder="Brand Name" className="input input-bordered w-full" />
                        </label>
                    </div>
                </div>
                {/* form supplier row */}
                <div className="md:flex mb-8 md:justify-center md:justify-items-center">
                    <div className="form-control md:w-1/3">
                        <label className="label">
                            <span className="font-bold text-lg text-blue-600">Product Type</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="type" placeholder="Product Type" className="input input-bordered w-full" />
                        </label>
                    </div>
                    <div className="form-control md:w-1/3 ml-4">
                        <label className="label">
                            <span className="font-bold text-lg text-blue-600">Price</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="price" placeholder="Price" className="input input-bordered w-full" />
                        </label>
                    </div>
                </div>
                {/* form category and details row */}
                <div className="md:flex mb-8 md:justify-center md:justify-items-center">
                    <div className="form-control md:w-1/3">
                        <label className="label">
                            <span className="font-bold text-lg text-blue-600">Short Description</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="description" placeholder="Short Description" className="input input-bordered w-full" />
                        </label>
                    </div>
                    <div className="form-control md:w-1/3 ml-4">
                        <label className="label">
                            <span className="font-bold text-lg text-blue-600">Ratings</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="rating" placeholder="Ratings" className="input input-bordered w-full" />
                        </label>
                    </div>
                </div>
                {/* form Photo url row */}
                <div className="mb-8 md:flex md:justify-center md:justify-items-center">
                    <div className="form-control md:w-1/3">
                        <label className="label">
                            <span className="font-bold text-lg text-blue-600">Photo URL</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="photo" placeholder="Photo URL" className="input input-bordered w-full" />
                        </label>
                    </div>
                </div>
                <div className="mx-auto text-center">
                    <input type="submit" value="Add Product" className="btn btn-block bg-blue-500 hover:bg-green-500 text-white hover:text-black md:w-1/4"/>
                </div>
            </form>
        </div>
    );
};

export default AddProduct;