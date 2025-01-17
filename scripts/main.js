class NavComponent extends HTMLElement()
{
        constructor()
        {
                super();
        }

        connectedCallback()
        {
                console.log("custom element added to the page");
        }

        disconnectedCallback()
        {
                console.log("custom element removed from the page");
        }
}

CustomElement.define("nav-component", NavComponent);

