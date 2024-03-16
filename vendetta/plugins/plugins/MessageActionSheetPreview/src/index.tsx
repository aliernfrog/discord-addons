import { findByName, findByProps } from "@vendetta/metro";
import { ReactNative } from "@vendetta/metro/common";
import { after, before } from "@vendetta/patcher";
import { Forms } from "@vendetta/ui/components";

const { View } = ReactNative;

const { default: ChatItemWrapper } = findByProps(
  "DCDAutoModerationSystemMessageView",
  "default"
);
const ActionSheet = findByProps("openLazy", "hideActionSheet");
const MessageRecord = findByName("MessageRecord");
const RowManager = findByName("RowManager");

const patch = before("openLazy", ActionSheet, ([comp, args, msg]) => {
  const message = msg?.message;
  if (args != "MessageLongPressActionSheet" || !message) return;
  
  comp.then(instance => {
    const unpatch = after("default", instance, (_, component) => {
      React.useEffect(() => () => { unpatch() }, []);

      const children = component.props?.children;
      if (!children) return;
      
      children.unshift(
        <View
          style={{
            paddingHorizontal: 12
          }}>
          <ChatItemWrapper
            rowGenerator={new RowManager()}
            message={new MessageRecord(message)}/>
        </View>
      );
    });
  });
});

export const onUnload = () => patch();