const Login = () => {
    return (
        <div className=" flex flex-col items-center justify-center h-screen" >
            <h1 className="relative font-bold text-xl mb-6">Seja bem-vindo(a)</h1>
            <form className="flex flex-col w-80">
                <label htmlFor="email" className="uppercase text-xs font-bold mb-2 block">Email</label>
                <input
                    id="email"
                    type="email"
                    placeholder="email@email.com"
                    className="pl-3 h-10 border-2 border-slate-400 focus:border-purple-600 duration-150 rounded outline-none mb-4"
                    required
                />
                <label htmlFor="senha" className="uppercase text-xs font-bold mb-2 block">Senha</label>
                <input
                    id="senha"
                    type="password"
                    placeholder="********"
                    className="pl-3 h-10 border-2 border-slate-400 focus:border-purple-600 duration-150 rounded outline-none mb-4"
                    required
                />
                <a href="/cadastrar.html" className="my-5">Cadastre-se</a>
                <button type="submit" className="w-full h-10 rounded bg-purple-400 hover:bg-purple-600 duration-200 hover:text-white font-bold">Logar</button>

            </form>
        </div >

        // <div className="bg-slate-300 h-screen flex flex-col justify-center items-center">
        //         <h1 className="bg-blue-700 rounded p-5">Seja Bem Vindo!</h1>
        //         <form className="flex flex-col w-80 " action="">
        //             <label htmlFor="email" >
        //                 Email: <input className="" type="email" name="" id="email" />
        //             </label>
        //             <label htmlFor="senha">
        //                 Senha: <input type="password" name="senha" id="senha" />
        //             </label>
        //         </form>
        // </div>
    );
}

export default Login;