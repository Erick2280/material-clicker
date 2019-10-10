// tslint:disable: max-classes-per-file
import { IdClass } from "./id-class";

export abstract class Effect extends IdClass {
  static classType = 'Effect';

  /** Is the effect active right now? */
  public isActive = false;

  /** Activates this effect. */
  public abstract activate(): void;
  /** Deactivates this effect (all instances, if any). This will also clear the "single use" state of the single use effect. */
  public abstract deactivate(): void;
}

export abstract class OngoingEffect extends Effect {
  /** Is this effect stackable. ie: run two or more instances at the same time */
  public abstract stackable: boolean;

  /** Your code to run for this effect. */
  public abstract onActivate(source: 'purchase' | 'load'): void;
  /** Clean up your effect in this function. */
  public abstract onDeactivate(): void;

  public activate() { }
  public deactivate() { }
}

export abstract class SingleUseEffect extends Effect {
  /** Is this effect stackable. ie: run two or more instances at the same time */
  public abstract stackable: boolean;

  /** Your activation code for the effect. */
  public abstract onActivate(): void;

  public activate() {
    // single use effects are very simple, we just run the callback defined.
    this.onActivate();
    this.isActive = true;
  }
  public deactivate() {
    // there is no code to deactivate, so we leave this blank.
    this.isActive = false;
  }
}
