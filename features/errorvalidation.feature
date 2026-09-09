Feature: Ecommerce validation

    Scenario: Place the order
        Given login with the valid "nemalisachin222@gmail.com" and "Qwert@123"
        When Add "ZARA COAT 3" to the cart
        Then verify the product is displayed in the cart
        When enter the valid details and place order
        Then verify whether the order is place in the order history



    @validation
    Scenario Outline: Place the order
        Given login to commerce application with the valid "<username>" and "<password>"
        Then verify error message is displayed

        Examples:
            | username                    | password  |
            | nemalisachin222@gmail.com   | Qwert@121 |
            | nemalisachin222+1@gmail.com | Qwert@122 |