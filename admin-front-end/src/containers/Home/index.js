import React from "react";
import { Jumbotron } from "react-bootstrap";
import Layout from "../../components/Layout";

const Home = () => {
  return (
    <div>
      <Layout>
        <Jumbotron
          style={{ margin: "5rem", background: "#fff" }}
          className="text-center"
        >
          <h1>Welcome to Admin Dashboard</h1>
          <p>
            Incididunt aliquip labore eu ex dolor veniam ea minim. Consectetur
            velit sit pariatur aliqua nisi ullamco qui nulla id non commodo ex
            do do. Cupidatat ex voluptate minim reprehenderit veniam cupidatat
            dolore mollit Lorem voluptate ipsum ut sunt. Excepteur nulla ex
            reprehenderit magna elit enim aute dolor dolor cillum eu irure
            exercitation non. Nisi exercitation sint esse culpa exercitation
            enim pariatur in cupidatat ipsum ex cupidatat non.
          </p>
        </Jumbotron>
      </Layout>
    </div>
  );
};

export default Home;
