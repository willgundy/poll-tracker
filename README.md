## The Golden Rule: 

🦸 🦸‍♂️ `Stop starting and start finishing.` 🏁

If you work on more than one feature at a time, you are guaranteed to multiply your bugs and your anxiety.

## Making a plan

1) **Make a drawing of your app. Simple "wireframes"** 
1) **Look at the drawing and imagine using the app. What _state_ do you need to track?** 
1) **Once you have a drawing, name the HTML elements you'll need to realize your vision**
1) **For each HTML element ask: Why do I need this? (i.e., "we need div to display the results in")** 
1) **Once we know _why_ we need each element, think about how to implement the "Why" as a "How" (i.e., `resultsEl.textContent = newResults`)**
1) **Find all the 'events' (user clicks, form submit, on load etc) in your app. Ask one by one, "What happens when" for each of these events. Does any state change? Does any DOM update?**
1) **Think about how to validate each of your features according to a Definition of Done. (Hint: console.log usually helps here.)**
1) **Consider what features _depend_ on what other features. Use this dependency logic to figure out what order to complete tasks.**

Additional considerations:
- Ask: which of your HTML elements need to be hard coded, and which need to be dynamically generated?
- Consider your data model. 
  - What kinds of objects (i.e., Dogs, Friends, Todos, etc) will you need? 
  - What are the key/value pairs? 
  - What arrays might you need? 
  - What needs to live in a persistence layer?
- Is there some state we need to initialize?
- Ask: should any of this work be abstracted into functions? (i.e., is the work complicated? can it be resused?)

Wireframe:
![wireframe](assets/wireframe.png)

To Do:
1. HTML Elements
  - outline below
2. Event Listeners
  - submit button - add poll input to current poll section
  - increase/decrease buttons - increase result numbers for different options
  - finish poll button - add results to the past polls section
3. DOM Updates
  - submit button 
    - update current poll section to have info from poll input
    - remove info from poll input section
  - increase/decrease buttons
    - update result numbers for option 1 and option 2
  - button finish poll
    - add card with results to the past polls section
    - remove info from current poll section

HTML Outline
- body
  - main
    - section poll input
      - h2
      - input1
      - input2
      - button
    - section current poll
      - h2
      - div - options
        - div - option1
          - p
          - button - increase
          - button - decrease
        - div - option2
          - p
          - button - increase
          - button - decrease
      - button
    - section past polls
      - div - past poll card
        - h2
        - div - result1
          - p option 1
          - p result 1
        - div - result2
          - p option 2
          - p result 2
        

