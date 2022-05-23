let currentLanguage = '';

// Create a class for the element
class CeLanguageManagerElement extends HTMLElement {

  constructor() {
    // Always call super first in constructor
    super();

    const observerOption = { childList: true, subtree: true, attributes: true, characterData: true };
    const mutationObserver = new MutationObserver((mutations) => {
      let needToTriggerEvent = false;
      mutations.forEach((mutation) => {
        if (mutation.type === 'attributes') {
          COMPONENTS_STARTING_WITH.forEach(component => {
            const nodeName = mutation.target.nodeName.toLowerCase();
            if (nodeName.startsWith(component)) {
              needToTriggerEvent = true;
            }
          });
        }
      });
      if (currentLanguage && needToTriggerEvent) {
        document.dispatchEvent(new CustomEvent(ACERTA_LANGUAGE_MANAGER_LANGUAGE_CHANGED_EVENT, { bubbles: true, composed: true, detail: currentLanguage }));
      }
    });
    mutationObserver.observe(document.body, observerOption);


    const languageChangedEventName = 'languageChanged';
    const defaultLanguage = 'nl';

    document.addEventListener(languageChangedEventName, (event) => {
      const eventDetail = event.detail;
      console.info(`Setting language '${eventDetail}'`);
      currentLanguage = eventDetail;
      document.dispatchEvent(new CustomEvent(ACERTA_LANGUAGE_MANAGER_LANGUAGE_CHANGED_EVENT, { bubbles: true, composed: true, detail: currentLanguage }));
    });

    currentLanguage = defaultLanguage;
    if (currentLanguage) {
      console.log(`Setting language '${currentLanguage}'`);
      document.dispatchEvent(new CustomEvent(ACERTA_LANGUAGE_MANAGER_LANGUAGE_CHANGED_EVENT, { bubbles: true, composed: true, detail: currentLanguage }));
    }

  }
}

// Define the new element
customElements.define('ce-language-manager', CeLanguageManagerElement);
