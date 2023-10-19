import Swal from "sweetalert2";

const ProductCard = ({ prod, cartProduct, setCartProduct }) => {

    const { _id, productName, brandName, type, description, price, photo } = prod || {};

    const handleDelete = id => {

        Swal.fire({
            title: 'Are you sure?',
            text: "Product Will Be Deleted From Cart",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Sure, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`https://brandshop-server-side.vercel.app/mycart/${id}`, {
                    method: 'DELETE'
                })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    if (data.deletedCount > 0) {
                        Swal.fire(
                            'Deleted!',
                            'Your Product has been Deleted.',
                            'success'
                        )
                        const remainProduct = cartProduct.filter( prod => prod._id !== id );
                        setCartProduct(remainProduct);
                    }
                })

            }
        })
    }

    return (
        <section>
            <div className="my-10">
                <div className="relative flex w-full max-w-[48rem] flex-row rounded-xl bg-gradient-to-br from-blue-500  to-cyan-500 hover:bg-gradient-to-tl hover:from-green-400 hover:to-lime-400 bg-clip-border text-gray-700 shadow-md">
                    <div className="relative m-0 w-2/5 shrink-0 overflow-hidden rounded-xl rounded-r-none bg-white bg-clip-border text-gray-700">
                        <img
                            src={photo}
                            alt="image"
                            className="h-full w-full object-cover"
                        />
                    </div>
                    <div className="p-6 text-left">
                        <h6 className="mb-4 bg-white rounded-full inline-block px-4 font-sans text-base font-semibold uppercase leading-relaxed tracking-normal text-black antialiased">
                           Brand: {brandName} <span>Price: ${price}</span>
                        </h6>
                        <h4 className="my-2 text-black text-lg font-semibold"> {type} </h4>
                        <h4 className="my-2 block font-sans text-3xl font-bold text-white leading-snug tracking-normal text-blue-gray-900 antialiased">
                            {productName.slice(0, 27)}
                        </h4>
                        <p className="my-2 block font-sans text-base font-normal leading-relaxed text-black antialiased">
                            {description.slice(0, 165)}
                        </p>
                        <button onClick={() => handleDelete(_id)}
                            className="rounded-lg py-2 px-3 text-center align-middle text-lg font-bold uppercase btn lg:btn-wide bg-blue-500 hover:bg-green-600 text-white hover:text-black flex select-none  items-center gap-2  font-sans transition-all hover:bg-pink-500/10 active:bg-pink-500/30 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                            type="button"
                        >
                            DELETE
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ProductCard;