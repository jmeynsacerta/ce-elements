let currentLanguage = '';
const COMPONENTS_STARTING_WITH = ['acerta-', 'ce-'];
const ACERTA_LANGUAGE_MANAGER_LANGUAGE_CHANGED_EVENT = 'acertaLanguageManagerLanguageChanged';

class CeLanguageManagerElement extends HTMLElement {

  constructor() {
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

    mutationObserver.observe(document.documentElement || document.body, observerOption);
  }

  static get observedAttributes() {
    return ['language-changed-event-name', 'default-language'];
  }

  attributeChangedCallback(name, oldValue, newValue) {
    if (name === 'default-language') {
      currentLanguage = newValue;
      console.log(`Setting language '${currentLanguage}'`);
      document.dispatchEvent(new CustomEvent(ACERTA_LANGUAGE_MANAGER_LANGUAGE_CHANGED_EVENT, { bubbles: true, composed: true, detail: currentLanguage }));
    }
    if (name === 'language-changed-event-name') {
      document.addEventListener(newValue, (event) => {
        const eventDetail = event.detail;
        console.info(`Setting language '${eventDetail}'`);
        currentLanguage = eventDetail;
        document.dispatchEvent(new CustomEvent(ACERTA_LANGUAGE_MANAGER_LANGUAGE_CHANGED_EVENT, { bubbles: true, composed: true, detail: currentLanguage }));
      });
    }
  }
}

customElements.define('ce-language-manager', CeLanguageManagerElement);
