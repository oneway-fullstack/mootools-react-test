# Implementation of requirements

This is a test project that integrate the React with the Mootools project located at 
https://github.com/rpmsoftware/assessment-ui-developer/.

## step 1. Create a React project

## step 2. Setting up Lint and Prettier configurations for editing

## step 3. Copy the Mootools project to the public folder in project directory

## step 4. Implementation of bi-directional communication between React and Mootools components using window.dispatchEvent and window.addEventListener functions.

### Make new React component to the /src/components/ReactTalk folder in project directory

    const ReactTalk  = () => {
    const [label, setLabel] = useState('React');
    const handleClick = () =>{
        window.dispatchEvent(new CustomEvent('ReactTalk', {detail: 'React Talk :' + label}));
    };

    window.addEventListener('MootoolsTalk', ((e: CustomEvent) => {
        setLabel(e.detail);
    }) as EventListener);

    return <button onClick = {handleClick}>{label}</button>
    }

    export default ReactTalk;

### Modify some lines on MyFunComponent.js in /public/old folder

    line 3:     var funComponent;   // add
    line 36:    window.dispatchEvent(new CustomEvent('MootoolsTalk', {detail: text}));  // modify
    Line 50:    window.addEventListener('ReactTalk', (e) => funComponent.setText(e.detail));    // modify

### Modify the index.jsx in /src folder

    const newDiv = ReactDOM.createRoot(
        document.getElementById('new') as HTMLElement
    );

    newDiv.render(
        <React.StrictMode>
            <ReactTalk/>
        </React.StrictMode>
    );

## step 5. Make unit test for new React component called ReactTalk

Test whether the newly created React component is rendered correctly and test that the caption changes when an event occurs from a Mootools component.

    test('ReactTalk Button', () => {
        render(<ReactTalk />);
        
        const btnElement = screen.getByText(/React/i);
        expect(btnElement).toBeInTheDocument();

        act(() => {
            window.dispatchEvent(new CustomEvent('MootoolsTalk', {detail: 'Three'}));
        });

        expect(btnElement.innerHTML).toBe('Three');
    });

