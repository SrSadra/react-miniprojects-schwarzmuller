import { render, screen } from "@testing-library/react"
import Async from "./Async"


describe('Async component', () => {
    test('should fetch post after request being sent', async () => {
        window.fetch = jest.fn();
        window.fetch.mockResolvedValueOnce({
            json: async () => [{id: "p1" , title: "First post"}]
        })
        render(<Async />);
        

      const items = await screen.findAllByRole("listitem");
      //the difference between find and get,query is that find returns a promise 
      // so we can handle async functionality like fetching data using this. For element that appears if the data is being fetched.
      expect(items).not.toHaveLength(0);
    })
    
})
