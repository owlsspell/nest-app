
import logo from "/icons/logo.png"

export default function Footer() {
    return (
        <footer className="footer items-center p-4 bg-neutral text-neutral-content">
            <div className="container mx-auto">
                <div className="items-center flex gap-4 w-full">
                    <div className="flex gap-2"> <img src={logo} alt="" className="h-5 w-auto m-auto" />medica</div>
                    <p className="mr-0 ml-auto">Copyright © {new Date().getFullYear()} - All right reserved</p>
                </div>
            </div >
        </footer >
    )
}
