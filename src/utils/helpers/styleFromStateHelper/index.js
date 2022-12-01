export default function styleFromStateHelper() {
  function activeClass(isActive) {
    return isActive ? 'is-active' : '';
  }

  function disabledClass(isDisabled) {
    return isDisabled ? 'is-disabled' : '';
  }

  function errorClass(hasError) {
    return hasError ? 'has-error' : '';
  }

  function loadingClass(isLoading) {
    return isLoading ? 'is-loading' : '';
  }

  return {
    activeClass,
    disabledClass,
    errorClass,
    loadingClass,
  };
}
