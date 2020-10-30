import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import CheckoutForm from "./CheckoutForm";

// Write up the two tests here and make sure they are testing what the title shows

test("form header renders", () => {
    render(<CheckoutForm/>)
    const header = screen.getByText(/Checkout Form/i)
    expect(header).toBeInTheDocument()

});

test("form shows success message on submit with form details", async () => {
    render(<CheckoutForm/>)
    const firstName = screen.getByLabelText(/First Name:/i)
    const lastName = screen.getByLabelText(/last name/i)
    const address = screen.getByLabelText(/address/i)
    const city = screen.getByLabelText(/city/i)
    const state = screen.getByLabelText(/state/i)
    const zip = screen.getByLabelText(/zip/i)

    fireEvent.change(firstName, {target:{value:'will'}})
    fireEvent.change(lastName, {target:{value:'Fletcher'}})
    fireEvent.change(address, {target:{value:'1234 poppenberg way'}})
    fireEvent.change(city, {target:{value:'jax'}})
    fireEvent.change(state, {target:{value:'FL'}})
    fireEvent.change(zip, {target:{value:'32034'}})

    expect(firstName).toHaveValue('will')
    expect(lastName).toHaveValue('Fletcher')
    expect(address).toHaveValue('1234 poppenberg way')
    expect(city).toHaveValue('jax')
    expect(state).toHaveValue('FL')
    expect(zip).toHaveValue('32034')

    const submitBtn = screen.getByRole('submitButton')
    fireEvent.click(submitBtn)

    const newFirstName = await screen.findAllByText(/will/i)
    expect(newFirstName).toBeTruthy()
    const newLastName = await screen.findAllByText(/fletcher/i)
    expect(newLastName).toBeTruthy()
    const newAddress = await screen.findAllByText(/1234 poppenberg way/i)
    expect(newAddress).toBeTruthy()
    const newCity = await screen.findAllByText(/jax/i)
    expect(newCity).toBeTruthy()
    const newState = await screen.findAllByText(/FL/i)
    expect(newState).toBeTruthy()
    const newZip = await screen.findAllByText(/32034/i)
    expect(newZip).toBeTruthy()

    const successMethod = await screen.findByText(/You have ordered some plants! Woo-hoo!/i)
    expect(successMethod).toBeTruthy()



});

const test44 = 'test for codeGrade'
const test2 = 'test2 for codeGrade'
const test22 = 'test22 for codeGrade'