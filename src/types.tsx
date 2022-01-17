
export interface TopPositionAnimation {
  top: number;
}
export interface TopPositionAnimationConfig {
  open: TopPositionAnimation;
  close: TopPositionAnimation;
  duration: number;
}

export interface BottomPositionAnimation {
  bottom: number;
}
export interface BottomPositionAnimationConfig {
  open: BottomPositionAnimation;
  close: BottomPositionAnimation;
  duration: number;
}