import React from "react";

const EmailLink = ({ email }: { email: string }) => {
  const handleClick = () => {
    window.location.href = `mailto:${email}`;
  };

  return (
    <div className="flex flex-row items-center justify-center space-x-1 text-neutral-500 dark:text-neutral-100">
      <a
        href={`mailto:${email}`}
        onClick={handleClick}
        className="hover:underline"
      >
        {email}
      </a>
    </div>
  );
};

export default EmailLink;
