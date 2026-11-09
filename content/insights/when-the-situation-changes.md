A clinic client is approaching their return window. A follow-up looks reasonable. A draft is prepared. Then someone checks the booking record: the client has already arranged their next visit.

The useful action has changed. Holding the draft completes a piece of work just as surely as sending a message would. It takes account of what the business now knows.

That small example points to a larger design question. When a workflow proposes a next step, how does it find out whether that step still makes sense?

## A reminder carries an assumption

A reminder assumes something remains unfinished. The client has not booked. The quote has not received a reply. The requested approval is still outstanding. Time passing can prompt a check, but it cannot establish whether the assumption is still true.

Consider a service business preparing a quote while its customer is discussing a change of scope. A scheduled message asking whether they have seen the original quote may arrive at exactly the wrong moment. The date is correct; the understanding of the conversation is out of date.

The design challenge is to make new information available before the next action. A booking, reply or decision needs to change the workflow, rather than become another note for someone to discover afterwards.

## Follow one decision through

This illustration follows a clinic review. The client and events are examples. Each stage explains what the operator needs to know and what should remain available to the next person.

:::diagram changing-situation

The record at the end is useful because it explains the pause. Without the reason, another operator could see an unfinished draft and start the same follow-up again.

## The same question appears in different work

In [Emilia](/systems#emilia), the review considers the client’s history, bookings and contact preferences. A return window is a reason to look more closely. A booking, reply or instruction not to contact the client changes what is appropriate. The clinic portal supports review decisions; live sending is not enabled there.

In [MarginFlow](/systems#marginflow), a quote remains attached to the enquiry and conversation. Its follow-up checks account for replies and whether an opportunity has been won or lost. That matters because a customer response can make another scheduled reminder unnecessary. MarginFlow remains in development.

For [CLVR Verified](/verified), the question concerns what was authorised. Its payment-control design connects a request and approval with the later payment record. A reviewer needs to be able to compare the details and investigate a difference. An approval reference has value because of the specific decision it points to.

With [Juris Global](/systems#juris), a research shortlist needs its reasons and sources. If a detail is questioned, the researcher should be able to revisit the supporting material and reconsider the option. The comparison is a working document for further investigation and an advisory conversation.

## Make a pause understandable

A useful pause has a reason, an owner and a record. “Client already booked” explains why a message was held. “Customer replied” explains why a reminder was skipped. Those statements give the next person something they can act on.

This is also a useful way to judge an interface. Can the person reviewing a task see what changed? Can they choose to wait, close it or ask for more information? Will a colleague understand that choice later?

Our view is that a workflow earns trust through those ordinary decisions. The system should make it easier to recognise a changed situation and leave a clear account of the response. Sometimes the right next step is to stop.

Read [the product decisions behind these checks](/insights/four-decisions-behind-four-products) for a closer look at how the idea takes shape in each product.
