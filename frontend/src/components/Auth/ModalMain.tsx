export default function ModalMain({ setView }: { setView: (view: string) => void }) {

    const setRegisterPage = () => setView('register');
    const setLoginPage = () => setView('login');

    return (
        <>
            <div className="mx-8">
                <h3 className=" text-2xl text-white">Get Started!</h3>
                <p className='text-lg text-white'>Join us now and start Your Journey.</p>
            </div>
            <div className="my-8 pt-8 flex flex-col items-center">
                <button className="btn btn-outline btn-secondary btn-wide btn-sm my-3" onClick={setRegisterPage}>Create an account</button>
                <button className="btn btn-outline btn-secondary btn-wide btn-sm" onClick={setLoginPage}>Sign in to your account</button>
            </div>
            {/* <div className="modal-action">
                <form method="dialog">
                    <button className="btn btn-xs btn-circle btn-ghost absolute right-0 top-0 leading-4">✕</button>
                 
                </form>
            </div> */}
        </>
    )
}
