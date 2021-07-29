export const onScrollTo = (element: string): void => {
  document.querySelector(`#${element}`)?.scrollIntoView({
    behavior: 'smooth',
		block: 'end',
  });
};