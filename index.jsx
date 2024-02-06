const App = () => {
    const location = useLocation();

    return (
        <Layout>
            <Routes>
                <Route path="/redux" element={<Redux />} />
                <Route element={<Protected />}>
                    <Route path="/useQuiery" element={<UseQuiery />} />
                </Route>
            </Routes>
        </Layout>
    );
};

const Protected = () => {
    const admin = false;

    if (admin) {
        return <Navigate to="/" />;
    }
    return <Outlet />;
};

export default App;