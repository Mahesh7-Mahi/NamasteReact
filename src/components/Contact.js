const Contact = () => {
    return (
        <div className="flex justify-center my-20">
            <div className="flex flex-col w-3/12">
                <div>
                    <h1 className="font-bold text-3xl m-2">Contact Us</h1>
                </div>
                <form className="flex flex-col"> 
                        <label className="font-bold mx-2" >Name</label>
                        <input type="text" className="border-2 m-2 p-2 rounded-lg" placeholder="name"/>
                        <label className="font-bold mx-2">Message</label>
                        <textarea type="text" className="border-2 m-2 p-2 rounded-lg" placeholder="Type here..."/>
                        <button className="m-2 p-2 bg-blue-500 text-white font-semibold rounded-lg cursor-pointer">Submit</button>
                </form>
            </div>
        </div>
    );
};

export default Contact;