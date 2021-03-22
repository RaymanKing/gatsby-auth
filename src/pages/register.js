import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"

const Register = () => {
    return (
        <Layout>
            <SEO title="Register" />
            <h4>Register</h4>
            <form>
                <div>
                    <label htmlFor="email">Email</label>
                    <br />
                    <input type="text" name="email" />
                    <br />
                    <br />
                </div>
                <div>
                    <label htmlFor="password">Password</label>
                    <br />
                    <input type="password" name="password" />
                    <br />
                    <br />
                </div>

                <input type="submit" value="Register" />
            </form>
        </Layout>
    )
}

export default Register