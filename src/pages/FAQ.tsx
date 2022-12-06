import { FC } from "react";
import { BaseLayout } from "./BaseLayout";

export const FAQPage: FC = () => {
  return (
    <BaseLayout>
      <div className="p-10">
        <p className="text-2xl font-sfpro-bold pb-6">
          Here are the answers to the last three questions:
        </p>
        <p className="text-xl font-sfpro-medium">
          Q: Do I need to wear headphones for the app to work?
        </p>
        <p className="text-xl font-sfpro-medium pb-6">
          A: Yes -- that way the app hears that you are talking but not the
          other folks on the call.
        </p>
        <p className="text-xl font-sfpro-medium">
          Q: Does the app collect any personal data?
        </p>
        <p className="text-xl font-sfpro-medium pb-6">
          A: It doesn't -- no login, no data. All data is kept on your phone.
          folks on the call.
        </p>
        <p className="text-xl font-sfpro-medium">
          Q: Are you all better listeners now?
        </p>
        <p className="text-xl font-sfpro-medium pb-6">
          A: Better, hopefully. But it's a journey! :-) Be, hear, now, good
          people!
        </p>
      </div>
    </BaseLayout>
  );
};
