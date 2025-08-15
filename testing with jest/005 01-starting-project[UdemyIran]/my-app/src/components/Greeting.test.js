import { render, screen } from "@testing-library/react"
import Greetings from "./Greetings"
import userEvent from "@testing-library/user-event";


describe("Greeting component", () => { // describe is tests group identifier . so multiple one categorical test goes inside one describe
        test('should render h1 tag ', () => { // describe what should happens
        //arrange
        render(<Greetings />);

        //act
        //nothing

        //assert
        const el = screen.getByText("From greeeting", { exact: false });
        expect(el).toBeInTheDocument();
        })
    
    test("Text1 When button is not clicked", () => {
        render(<Greetings />);

        const el = screen.getByTestId("p1");
        expect(el).toBeInTheDocument();
    });

        test("Text2 When button is clicked", () => {
          render(<Greetings />);

            //act
            const buttonEl = screen.getByRole("button");
            userEvent.click(buttonEl);
            
            //assert
          const el = screen.getByTestId("p2");
          expect(el).toBeInTheDocument();
        });
    
    test("Text1 Disappear when button is clicked", () => {
        render(<Greetings />);

        const buttonEl = screen.getByRole("button");
        userEvent.click(buttonEl);

        const el = screen.queryByTestId("p1"); // get method will return error if the element is not found (in the dom). so we use query instead (it returns null if not exist)
        expect(el).toBeNull();
    })

} )

