import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import PageLayout from "./pages/PageLayout";
import PageNotFound from "./components/PageNotFound";
import GlobalStyles from "./styles/GlobalStyles";
import Home from "./pages/Home";
import { DarkModeProvider } from "../context/DarkModeContext";
import DeviceDetails from "./pages/DeviceDetails";

function App() {
  return (
    <>
      <DarkModeProvider>
        <GlobalStyles />
        <BrowserRouter>
          <Routes>
            {/* main route */}
            <Route element={<PageLayout />}>
              <Route index element={<Navigate replace to="home" />} />

              <Route path="home" element={<Home />} />
              <Route path="device-details" element={<DeviceDetails />} />

              {/* <Route path="services" element={<Services />} />
              <Route path="providerReg" element={<ProviderSignup />} />
              <Route path="clientReg" element={<ClientSignup />} />
              <Route path="requestService" element={<RequestService />} /> */}
              <Route path="*" element={<PageNotFound />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </DarkModeProvider>
    </>
  );
}

export default App;
