const C3 = self.C3;
self.C3_GetObjectRefTable = function () {
	return [
		C3.Plugins.TiledBg,
		C3.Plugins.Sprite,
		C3.Behaviors.EightDir,
		C3.Plugins.Camera3D,
		C3.Plugins.Shape3D,
		C3.Behaviors.solid,
		C3.Plugins.Keyboard,
		C3.Behaviors.MoveTo,
		C3.Behaviors.Bullet,
		C3.Plugins.Mouse,
		C3.Plugins.Touch,
		C3.Plugins.Text,
		C3.Plugins.Button,
		C3.Plugins.Audio,
		C3.Plugins.System.Cnds.OnLayoutStart,
		C3.Behaviors.MoveTo.Acts.MoveToObject,
		C3.Plugins.Sprite.Acts.SetAnimFrame,
		C3.Plugins.Camera3D.Acts.LookParallelToLayout,
		C3.Plugins.Sprite.Exps.X,
		C3.Plugins.Sprite.Exps.Y,
		C3.Plugins.Sprite.Exps.ZElevation,
		C3.Plugins.Sprite.Exps.Angle,
		C3.Plugins.System.Cnds.EveryTick,
		C3.Plugins.Camera3D.Acts.SetPosition,
		C3.Plugins.Sprite.Acts.SetAngle,
		C3.Plugins.Camera3D.Exps.CameraXRotation,
		C3.Plugins.Text.Acts.SetText,
		C3.Plugins.Keyboard.Cnds.IsKeyDown,
		C3.Plugins.Sprite.Acts.MoveForward,
		C3.Plugins.Sprite.Acts.MoveAtAngle,
		C3.Plugins.Mouse.Cnds.OnClick,
		C3.Plugins.Sprite.Acts.StartAnim,
		C3.Plugins.Sprite.Acts.Spawn,
		C3.Plugins.System.Acts.SubVar,
		C3.Plugins.Audio.Acts.Play,
		C3.Plugins.Shape3D.Cnds.OnCollision,
		C3.Plugins.Shape3D.Cnds.CompareZElevation,
		C3.Plugins.Shape3D.Acts.SubInstanceVar,
		C3.Plugins.Shape3D.Acts.Destroy,
		C3.Plugins.Shape3D.Cnds.CompareInstanceVar,
		C3.Plugins.Mouse.Cnds.OnMovement,
		C3.Plugins.Camera3D.Acts.RotateCamera,
		C3.Plugins.Mouse.Exps.MovementX,
		C3.Plugins.Mouse.Exps.MovementY,
		C3.Plugins.Mouse.Cnds.OnAnyClick,
		C3.Plugins.Mouse.Acts.RequestPointerLock,
		C3.Plugins.System.Cnds.Every,
		C3.Plugins.Shape3D.Acts.SetZElevation,
		C3.Plugins.Shape3D.Exps.ZElevation,
		C3.Plugins.Camera3D.Exps.CameraYRotation,
		C3.Plugins.Camera3D.Exps.LookZ,
		C3.Plugins.Sprite.Acts.SetWidth,
		C3.Plugins.Sprite.Cnds.OnCollision,
		C3.Plugins.Sprite.Acts.SubInstanceVar,
		C3.Plugins.Sprite.Cnds.CompareInstanceVar,
		C3.Plugins.System.Acts.GoToLayout,
		C3.Plugins.System.Acts.ResetGlobals,
		C3.Plugins.Shape3D.Cnds.OnDestroyed,
		C3.Plugins.System.Acts.AddVar,
		C3.Plugins.System.Cnds.CompareVar,
		C3.Plugins.Touch.Cnds.IsTouchingObject,
		C3.Plugins.Touch.Cnds.OnTapGestureObject,
		C3.Plugins.Sprite.Acts.AddInstanceVar,
		C3.Plugins.System.Acts.ResetEventVar
	];
};
self.C3_JsPropNameTable = [
	{LavaFloor: 0},
	{healthplayer: 0},
	{"8Direction": 0},
	{Player: 0},
	{"3DCamera": 0},
	{Solid: 0},
	{"3DShape": 0},
	{Keyboard: 0},
	{HandGun: 0},
	{aim: 0},
	{health: 0},
	{MoveTo: 0},
	{Demon: 0},
	{DemonSprt: 0},
	{Background: 0},
	{Bullet: 0},
	{PlayerBullet: 0},
	{Mouse: 0},
	{Sprite: 0},
	{Touch: 0},
	{Sprite2: 0},
	{Sprite3: 0},
	{Sprite4: 0},
	{score: 0},
	{Text: 0},
	{popup_win: 0},
	{Sprite5: 0},
	{win: 0},
	{Sprite6: 0},
	{Sprite7: 0},
	{Sprite8: 0},
	{nextremovebgpreview: 0},
	{next: 0},
	{nextremovebgpreview2: 0},
	{Sprite9: 0},
	{Button: 0},
	{health_bar: 0},
	{bar_2: 0},
	{Sprite10: 0},
	{Sprite11: 0},
	{Sprite12: 0},
	{Sprite13: 0},
	{rerty: 0},
	{Sprite14: 0},
	{Text2: 0},
	{AidKid: 0},
	{p3k: 0},
	{Text3: 0},
	{Judul: 0},
	{Text4: 0},
	{panah: 0},
	{Sprite15: 0},
	{panah2: 0},
	{panah3: 0},
	{panah4: 0},
	{panah5: 0},
	{Audio: 0},
	{Sprite16: 0},
	{tembak: 0},
	{peluru: 0},
	{peluru1: 0},
	{plr: 0},
	{fds: 0},
	{"3DShape2": 0},
	{"3DShape3": 0},
	{Sprite17: 0},
	{Text5: 0},
	{Sprite18: 0},
	{Sprite19: 0},
	{Sensitivity: 0},
	{kill: 0},
	{bullet: 0}
];

self.InstanceType = {
	LavaFloor: class extends self.ITiledBackgroundInstance {},
	Player: class extends self.ISpriteInstance {},
	_3DCamera: class extends self.IInstance {},
	_3DShape: class extends self.I3DShapeInstance {},
	Keyboard: class extends self.IInstance {},
	HandGun: class extends self.ISpriteInstance {},
	aim: class extends self.ISpriteInstance {},
	Demon: class extends self.I3DShapeInstance {},
	DemonSprt: class extends self.ISpriteInstance {},
	Background: class extends self.I3DShapeInstance {},
	PlayerBullet: class extends self.I3DShapeInstance {},
	Mouse: class extends self.IInstance {},
	Sprite: class extends self.ISpriteInstance {},
	Touch: class extends self.IInstance {},
	Sprite2: class extends self.ISpriteInstance {},
	Sprite3: class extends self.ISpriteInstance {},
	Sprite4: class extends self.ISpriteInstance {},
	Text: class extends self.ITextInstance {},
	popup_win: class extends self.ISpriteInstance {},
	Sprite5: class extends self.ISpriteInstance {},
	win: class extends self.ISpriteInstance {},
	Sprite6: class extends self.ISpriteInstance {},
	Sprite7: class extends self.ISpriteInstance {},
	Sprite8: class extends self.ISpriteInstance {},
	nextremovebgpreview: class extends self.ISpriteInstance {},
	next: class extends self.ISpriteInstance {},
	nextremovebgpreview2: class extends self.ISpriteInstance {},
	Sprite9: class extends self.ISpriteInstance {},
	Button: class extends self.IButtonInstance {},
	health_bar: class extends self.ISpriteInstance {},
	bar_2: class extends self.ISpriteInstance {},
	Sprite10: class extends self.ISpriteInstance {},
	Sprite11: class extends self.ISpriteInstance {},
	Sprite12: class extends self.ISpriteInstance {},
	Sprite13: class extends self.ISpriteInstance {},
	rerty: class extends self.ISpriteInstance {},
	Sprite14: class extends self.ISpriteInstance {},
	Text2: class extends self.ITextInstance {},
	AidKid: class extends self.ISpriteInstance {},
	p3k: class extends self.I3DShapeInstance {},
	Text3: class extends self.ITextInstance {},
	Judul: class extends self.ITextInstance {},
	Text4: class extends self.ITextInstance {},
	panah: class extends self.ISpriteInstance {},
	Sprite15: class extends self.ISpriteInstance {},
	panah2: class extends self.I3DShapeInstance {},
	panah3: class extends self.ISpriteInstance {},
	panah4: class extends self.ISpriteInstance {},
	panah5: class extends self.ISpriteInstance {},
	Audio: class extends self.IInstance {},
	Sprite16: class extends self.ISpriteInstance {},
	tembak: class extends self.ISpriteInstance {},
	peluru: class extends self.I3DShapeInstance {},
	peluru1: class extends self.ISpriteInstance {},
	fds: class extends self.ITextInstance {},
	_3DShape2: class extends self.I3DShapeInstance {},
	_3DShape3: class extends self.I3DShapeInstance {},
	Sprite17: class extends self.ISpriteInstance {},
	Text5: class extends self.ITextInstance {},
	Sprite18: class extends self.ISpriteInstance {},
	Sprite19: class extends self.ISpriteInstance {}
}