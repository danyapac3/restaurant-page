export const renderPage = (html) => {
  const $wrapper = document.createElement('div');
  
  $wrapper.innerHTML = html;

  const $result = $wrapper.firstChild;
  
  $wrapper.removeChild($result);
  
  return $result;
}