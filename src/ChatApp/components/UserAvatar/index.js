import "./styles.css";

// Copied from https://codepen.io/sergiopedercini/pen/RLJYLj/
function generateColour(name) {
  let hash = 0;

  for (let i = 0; i < name.length; i++) {
    hash = name.charCodeAt(i) + ((hash << 5) - hash);
  }

  let h = hash % 360;
  const s = 30;
  const l = 80;
  return "hsl(" + h + ", " + s + "%, " + l + "%)";
}

function getNameAvatarInitials(name) {
  let nameInitials = "";
  const nameParts = name.split(" ");
  if (nameParts.length > 1) {
    nameInitials += nameParts[0][0] + nameParts[1][0];
  } else {
    nameInitials += name[0] + name[1];
  }

  return nameInitials.toUpperCase();
}

function UserAvatar({
  name,
  // TODO: Support user profile pic
}) {
  const bgColor = generateColour(name);
  // console.log("bgColor", bgColor);
  return (
    <div className="name-avatar" style={{ backgroundColor: bgColor }}>
      <span>{getNameAvatarInitials(name)}</span>
    </div>
  );
}

export default UserAvatar;
