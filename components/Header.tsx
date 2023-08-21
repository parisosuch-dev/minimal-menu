import Nav from "./Nav";

interface HeaderProps {
    isAuth: boolean
};

const Header = (props: HeaderProps) => {
    return (
        <header className="flex flex-row justify-between px-8 py-4 border border-b-2 border-b-gray-200/50">
            <h1 className="text-xl font-black">minimal menu</h1>
            <div>
                {props.isAuth ? <Nav /> : null}
            </div>
        </header>
    )
}

export default Header;