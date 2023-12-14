export default function ModalMain({ setView }: { setView: (view: string) => void }) {

    const setRegister = () => setView('register');

    return (
        <>
            <div className="mx-8">
                <h3 className=" text-2xl">Get Started!</h3>
                <p className='text-lg'>Join us now and start Your Journey.</p>
            </div>
            <div className="my-8 pt-8 flex flex-col items-center">
                <button className="btn btn-secondary btn-wide btn-sm my-3 hover:bg-base-100 hover:text-base-content" onClick={setRegister}>Create an account</button>
                <button className="btn btn-outline btn-secondary btn-wide btn-sm">Sign in to your account</button>
            </div>
            {/* <div className="modal-action">
                <form method="dialog">
                    <button className="btn btn-xs btn-circle btn-ghost absolute right-0 top-0 leading-4">✕</button>
                 
                </form>
            </div> */}
        </>
    )
}
