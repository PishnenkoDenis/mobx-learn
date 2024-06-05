import {
  IReactionDisposer,
  action,
  autorun,
  computed,
  // makeAutoObservable,
  makeObservable,
  observable,
  reaction,
  when,
} from "mobx";

class CounterStore {
  counter = 0;

  //disposer-ы - функции для очистки реакций из памяти при размонтировании комп-та
  //Каждая реакция возвращает disposer для очистки
  reactionDisposer: IReactionDisposer;
  autorunDisposer: IReactionDisposer;

  constructor() {
    makeObservable(this, {
      counter: observable,
      increment: action,
      decrement: action,
      total: computed,
    });
    //makeAutoObservable(this) - автоматически выполняет ф-ии makeObservable
    //makeAutoObservable(this);
    //autorun - реакция, которая запускается при изменении наблюдаемых полей в сторе
    this.autorunDisposer = autorun(() => console.log(this.counter));
    //when - схож с reaction, но вып-ся только один раз
    when(
      () => this.counter > 5,
      () => console.log("Counter bigger than 5")
    );
    //reaction - реакция, которая запускается при выполнении условия в предикате, который она принимает первым арг-ом
    this.reactionDisposer = reaction(
      () => this.counter > 5,
      () => (this.counter = 0)
    );
  }

  increment = () => {
    this.counter += 1;
  };

  decrement = () => {
    this.counter -= 1;
  };

  destroyReaction = () => {
    console.log("destroyReaction");
    this.reactionDisposer();
  };

  destroyAutorun = () => {
    console.log("destroyAutorun");
    this.autorunDisposer();
  };

  //get - возвращает вычисляемое значение св-ва
  get total() {
    return this.counter * 2;
  }
}

const counterStore = new CounterStore();

export default counterStore;
