import { component$, useStore, useStylesScoped$ } from '@builder.io/qwik';
import styles from './example.css?inline';

console.log(styles);

export const ExampleTest = component$((props: { flag: boolean }) => {
  useStylesScoped$(styles);
  const state = useStore({
    counter: 0,
  });

  return (
    <>
      <span>Count:{state.counter}</span>
      <div class="icon">Flag: {props.flag ? '⭐' : '💣'}</div>
      <button className="btn-counter" onClick$={() => state.counter++}>
        Increment counter
      </button>
    </>
  );
});
