---
title: Treatment Plans
cover: /assets/img/room-1.jpg
coverAlt: Treatment Room 1
---

## Treatment Plans
At Chase Podiatry we offer a range of treatment plans, they are listed below.
Whilst we regularly update this page, we may from time to time need to temporarily change our prices.
For more information, or to book an appointment, please [contact us]({% link _pages/about/index.md %}#contact-us) or call [{{site.phone}}](tel:{{site.phone|stripwhitespace}}).

<table id="pricelist">
    <thead>
        <tr>
            <th>Treatment</th>
            <th>Price</th>
         </tr>
    </thead>
    <tbody>
        {% for treatment in site.data.prices %}
            <tr>
                <td>
                    <b>{{ treatment.name | markdownify }}</b>
                    {{ treatment.description | markdownify }}
                </td>
                <td>{{ treatment.price }}</td>
             </tr>
        {% endfor %}
    </tbody>
</table>


Last updated: {{ page.last_modified_at | date_to_string }}
