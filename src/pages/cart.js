import React, { useContext } from 'react';
import Seo from "../components/seo"
import StoreContext from "../context/store"
import LineItem from "../components/line_item"
const cart = () => {

    const context = useContext(StoreContext)
    const { checkout } = context
    const line_item = checkout.lineItems.map(line_item => {
        return <LineItem key={line_item.id.toString()} line_item={line_item} />
    })

    console.log(context)


    return (
        <>
            <Seo />
            <section className="hero is-fullheight is-light is-bold">
                <div className="hero-body">
                    <div className="container">
                        <div className="columns is-vcentered">
                            <div className="column">
                                <div className="box">
                                    <h2 className="title has-text-weight-semibold">Card</h2>
                                    <hr className="dark" />
                                    <div className="table-container">
                                        <table className="table is-fullwidth is-hoverable">
                                            <thead>
                                                <tr>
                                                    <th>Item Description</th>
                                                    <th>Quantity</th>
                                                    <th>Price</th>
                                                    <th>Total</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {line_item}
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                            <div className="column is-3">
                                <div className="box">
                                    <h2 className="subtitle has-text-weight-semibold is-size-4">Order Summary</h2>
                                    <hr/>
                                    <p className="subtitle has-text-weight-semibold ">Subtotal :</p>
                                    <p className="has-text-right has-text-weight-semibold is-size-5">$ {checkout.subtotalPrice}</p>
                                    <p className="subtitle has-text-weight-semibold ">Taxes :</p>
                                    <p className="has-text-right has-text-weight-semibold is-size-5"> $ {checkout.totalTax}</p>
                                    <p className="subtitle has-text-weight-semibold ">Total :</p>
                                    <p className="has-text-right has-text-weight-semibold is-size-5">$ {checkout.totalPrice}</p>
                                    <hr/>
                                    <a className="button is-medium is-fullwidth is-dark" href={checkout.webUrl}>Checkout</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}


export default cart;