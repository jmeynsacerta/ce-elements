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
      if (this.currentLanguage && needToTriggerEvent) {
        document.dispatchEvent(new CustomEvent(ACERTA_LANGUAGE_MANAGER_LANGUAGE_CHANGED_EVENT, { bubbles: true, composed: true, detail: this.currentLanguage }));
      }
    });
    mutationObserver.observe(document.body, observerOption);


    const languageChangedEventName = 'languageChanged';
    const defaultLanguage = 'nl';

    document.addEventListener(languageChangedEventName, (event) => {
      const eventDetail = event.detail;
      console.info(`Setting language '${eventDetail}'`);
      this.currentLanguage = eventDetail;
      document.dispatchEvent(new CustomEvent(ACERTA_LANGUAGE_MANAGER_LANGUAGE_CHANGED_EVENT, { bubbles: true, composed: true, detail: this.currentLanguage }));
    });

    this.currentLanguage = defaultLanguage;
    if (this.currentLanguage) {
      console.log(`Setting language '${this.currentLanguage}'`);
      document.dispatchEvent(new CustomEvent(ACERTA_LANGUAGE_MANAGER_LANGUAGE_CHANGED_EVENT, { bubbles: true, composed: true, detail: this.currentLanguage }));
    }

  }
}

// Define the new element
customElements.define('ce-language-manager', CeLanguageManagerElement);
