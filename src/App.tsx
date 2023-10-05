import React from "react";
import MyRouter from "routers/index";
import { Helmet, HelmetProvider } from "react-helmet-async";

function App() {
  return (
    <HelmetProvider>
      <Helmet>
        <title>Ecommerce || Shop - eCommerce </title>
        <meta
          name="description"
          content="Ecommerce || Shop - eCommerce"
        />
      </Helmet>

      {/* MAIN APP g */}
      <div className="bg-white text-base dark:bg-slate-900 text-slate-900 dark:text-slate-200">
        <MyRouter />
      </div>
    </HelmetProvider>
  );
}

export default App;
