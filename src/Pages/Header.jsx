import LinkBtn from "../Components/LinkBtn";

const Header = () => {
    return ( 
        <div className="flex flex-col lg:flex-row lg:py-20 justify-between " id="main">
            <div className="mt-10 lg:w-3/5 text-center lg:text-left ">
                <p className="text-3xl mb-6">Hi, my name is Ilham Wisnu</p>
                <p className="text-4xl leading-none ">I’m a freelance UX/UI Designer with a marketing background specializing in Shopify & Webflow.</p>
                <div className="flex mt-6 justify-center lg:justify-start">
                    <LinkBtn href="#" className="mr-2" type="outlined">My Work</LinkBtn>
                    <LinkBtn href="#" type="">Let's Talk'</LinkBtn>
                </div>
            </div>
            <img className="mt-8 lg:mt-0 max-w-sm mx-auto" src="./photo.png" alt="" />
        </div>
     );
}
 
export default Header;